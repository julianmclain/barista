const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../src/app");
const knex = require("../src/db/knexConnection");

describe("routes : /coffees", () => {
  beforeEach(() => {
    return knex.migrate
      .rollback()
      .then(() => {
        return knex.migrate.latest();
      })
      .then(() => {
        return knex.seed.run();
      });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe("GET /", () => {
    it("should return json", done => {
      chai
        .request(server)
        .get("/coffees")
        .end((err, res) => {
          // TODO - see if chai supports promises
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql("application/json");
          res.body.status.should.equal("success");
          res.body.message.should.eql("hello, world!");
          done();
        });
    });
  });
});

// beforeEach(async done => {
//   await knex.migrate.rollback();
//   await knex.migrate.latest();
//   await knex.seed.run();
//   done();
// });

// afterEach(async done => {
//   await knex.migrate.rollback();
//   done();
// });
