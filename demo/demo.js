const cfg = require("../index")(__dirname + "/config");
const log = require("lemonlog")("ConfigPath");

log.info(cfg.db);