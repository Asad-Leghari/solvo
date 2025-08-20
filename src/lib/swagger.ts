import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Solvo API Docs",
      version: "1.0.0",
      description: "API documentation for Solvo",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/app/api/**/*.{ts,js}"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
