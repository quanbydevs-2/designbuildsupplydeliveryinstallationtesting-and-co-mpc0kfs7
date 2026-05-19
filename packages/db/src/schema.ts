import { defineRelations } from "drizzle-orm"
import { createTable } from "./utils/table.js"

// ═══════════════ AUTH TABLES ═══════════════

export const users = createTable("users", t => ({
  id: t.text("id").primaryKey(),
  name: t.text("name").notNull(),
  email: t.text("email").notNull().unique(),
  emailVerified: t.boolean("email_verified").default(false).notNull(),
  image: t.text("image"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const sessions = createTable("sessions", t => ({
  id: t.text("id").primaryKey(),
  token: t.text("token").notNull().unique(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expiresAt: t.timestamp("expires_at").notNull(),
  ipAddress: t.text("ip_address"),
  userAgent: t.text("user_agent"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const accounts = createTable("accounts", t => ({
  id: t.text("id").primaryKey(),
  accountId: t.text("account_id").notNull(),
  providerId: t.text("provider_id").notNull(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  accessToken: t.text("access_token"),
  refreshToken: t.text("refresh_token"),
  password: t.text("password"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const verifications = createTable("verifications", t => ({
  id: t.text("id").primaryKey(),
  identifier: t.text("identifier").notNull(),
  value: t.text("value").notNull(),
  expiresAt: t.timestamp("expires_at").notNull(),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ MODULE TABLES ═══════════════

export const farmers = createTable("farmers", t => ({
  id: t.serial("id").primaryKey(),
  fullName: t.text("full_name").notNull(),
  barangay: t.text("barangay").notNull(),
  farmSize: t.doublePrecision("farm_size").notNull(),
  farmType: t.text("farm_type").notNull(),
  contactNumber: t.text("contact_number"),
  registrationDate: t.timestamp("registration_date").notNull(),
  status: t.text("status").notNull(),
  notes: t.text("notes"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const crops = createTable("crops", t => ({
  id: t.serial("id").primaryKey(),
  cropName: t.text("crop_name").notNull(),
  variety: t.text("variety"),
  plantingDate: t.timestamp("planting_date").notNull(),
  expectedHarvest: t.timestamp("expected_harvest"),
  areaPlanted: t.doublePrecision("area_planted").notNull(),
  farmerId: t.integer("farmer_id").notNull(),
  productionStatus: t.text("production_status").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const livestocks = createTable("livestocks", t => ({
  id: t.serial("id").primaryKey(),
  animalType: t.text("animal_type").notNull(),
  breed: t.text("breed"),
  quantity: t.integer("quantity").notNull(),
  farmerId: t.integer("farmer_id").notNull(),
  healthStatus: t.text("health_status").notNull(),
  lastVaccination: t.timestamp("last_vaccination"),
  purpose: t.text("purpose").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const programs = createTable("programs", t => ({
  id: t.serial("id").primaryKey(),
  programName: t.text("program_name").notNull(),
  description: t.text("description").notNull(),
  startDate: t.timestamp("start_date").notNull(),
  endDate: t.timestamp("end_date"),
  budget: t.doublePrecision("budget").notNull(),
  beneficiaries: t.integer("beneficiaries"),
  status: t.text("status").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const resources = createTable("resources", t => ({
  id: t.serial("id").primaryKey(),
  resourceName: t.text("resource_name").notNull(),
  category: t.text("category").notNull(),
  quantity: t.integer("quantity").notNull(),
  unit: t.text("unit").notNull(),
  supplier: t.text("supplier"),
  dateAcquired: t.timestamp("date_acquired").notNull(),
  condition: t.text("condition").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const dataprivacys = createTable("dataprivacys", t => ({
  id: t.serial("id").primaryKey(),
  requestType: t.text("request_type").notNull(),
  dataSubject: t.text("data_subject").notNull(),
  purposeOfProcessing: t.text("purpose_of_processing").notNull(),
  consentStatus: t.text("consent_status").notNull(),
  filedDate: t.timestamp("filed_date").notNull(),
  resolvedDate: t.timestamp("resolved_date"),
  breachReported: t.boolean("breach_reported").default(false),
  privacyImpactAssessment: t.text("privacy_impact_assessment"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ RELATIONS ═══════════════

export const relations = defineRelations({ users, sessions, accounts, farmers, crops, livestocks, programs, resources, dataprivacys }, r => ({
  users: {
    sessions: r.many.sessions(),
    accounts: r.many.accounts(),
  },
  sessions: {
    user: r.one.users({ from: r.sessions.userId, to: r.users.id }),
  },
  accounts: {
    user: r.one.users({ from: r.accounts.userId, to: r.users.id }),
  },
  farmers: {
    author: r.one.users({ from: r.farmers.authorId, to: r.users.id }),
  },
  crops: {
    author: r.one.users({ from: r.crops.authorId, to: r.users.id }),
  },
  livestocks: {
    author: r.one.users({ from: r.livestocks.authorId, to: r.users.id }),
  },
  programs: {
    author: r.one.users({ from: r.programs.authorId, to: r.users.id }),
  },
  resources: {
    author: r.one.users({ from: r.resources.authorId, to: r.users.id }),
  },
  dataprivacys: {
    author: r.one.users({ from: r.dataprivacys.authorId, to: r.users.id }),
  },
}))

export const schema = Object.assign({ users, sessions, accounts, verifications, farmers, crops, livestocks, programs, resources, dataprivacys }, relations)
