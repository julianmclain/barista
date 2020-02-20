const db = require("../db");

exports.findAll = async function(ctx) {
  const res = await db.query("SELECT $1::text as message", ["Hello world"]);
  ctx.body = {
    coffees: [res.rows[0].message],
    user: ctx.request.user
  };
};
