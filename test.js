const ConfigPath = require("./index");
const cfg = new ConfigPath("./config");
const LemonLog = require("lemonlog");
const log = new LemonLog("ConfigPath");

log.info(cfg.get());