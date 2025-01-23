import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1737373542305 implements MigrationInterface {
    name = 'Migrations1737373542305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "project_id_seq" OWNED BY "project"."id"`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "id" SET DEFAULT nextval('"project_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "country" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "pricePerTon" TYPE numeric(5,2)`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "distributionWeight" TYPE numeric(5,2)`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "description" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "distributionWeight" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "pricePerTon" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "country" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "project_id_seq"`);
    }

}
