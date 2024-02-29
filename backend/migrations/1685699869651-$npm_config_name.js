import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class  $npmConfigName1685699869651 {
    name = ' $npmConfigName1685699869651'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "movie" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "adult" boolean NOT NULL,
                "backdrop_path" varchar NOT NULL,
                "genre_ids" text,
                "original_language" varchar NOT NULL,
                "original_title" varchar NOT NULL,
                "overview" varchar NOT NULL,
                "popularity" integer NOT NULL,
                "poster_path" varchar NOT NULL,
                "release_date" datetime NOT NULL,
                "title" varchar NOT NULL,
                "video" boolean NOT NULL,
                "vote_average" integer NOT NULL,
                "vote_count" integer NOT NULL,
                "liked" integer NOT NULL DEFAULT (0)
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar NOT NULL,
                "firstname" varchar NOT NULL,
                "lastname" varchar NOT NULL,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "movie"
        `);
    }
}
