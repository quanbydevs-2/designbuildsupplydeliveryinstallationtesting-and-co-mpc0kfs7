import { oc } from "@orpc/contract"
import { farmerContract } from "./modules/farmer/farmer.contract.js"
import { cropContract } from "./modules/crop/crop.contract.js"
import { livestockContract } from "./modules/livestock/livestock.contract.js"
import { programContract } from "./modules/program/program.contract.js"
import { resourceContract } from "./modules/resource/resource.contract.js"
import { dataprivacyContract } from "./modules/dataprivacy/dataprivacy.contract.js"

export const contract = oc.router({
  farmer: farmerContract,
  crop: cropContract,
  livestock: livestockContract,
  program: programContract,
  resource: resourceContract,
  dataprivacy: dataprivacyContract,
})