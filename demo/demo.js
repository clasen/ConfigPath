const cfg = require("../index")(__dirname + "/config");
const log = require("lemonlog")("Configre");

log.info(cfg.db);