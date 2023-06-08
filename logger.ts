import pino from "pino";
// import pretty from "pino-pretty";

// const stream = pretty({
//   colorize: true,
// });

const logger = pino(
  {
    level: "debug",
  }
  // stream
);

export default logger;

// add pending external action redirect
// redirect stragey to entire window
// api
