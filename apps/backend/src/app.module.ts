import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { FarmerModule } from "./modules/farmer/farmer.module"
import { CropModule } from "./modules/crop/crop.module"
import { LivestockModule } from "./modules/livestock/livestock.module"
import { ProgramModule } from "./modules/program/program.module"
import { ResourceModule } from "./modules/resource/resource.module"
import { DataPrivacyModule } from "./modules/dataprivacy/dataprivacy.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FarmerModule, CropModule, LivestockModule, ProgramModule, ResourceModule, DataPrivacyModule,
  ],
})
export class AppModule {}