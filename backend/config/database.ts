import path from "path";

export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  if (client === "postgres") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host:     env("DATABASE_HOST",     "127.0.0.1"),
          port:     Number(env("DATABASE_PORT",     "5432")),
          database: env("DATABASE_NAME",     "allyonoguru"),
          user:     env("DATABASE_USERNAME", "postgres"),
          password: env("DATABASE_PASSWORD", ""),
          ssl:      env("DATABASE_SSL",      "false") === "true"
            ? { rejectUnauthorized: false }
            : false,
        },
      },
    };
  }

  // Default: SQLite for local development
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          process.cwd(),
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
