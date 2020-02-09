const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../src/app");
const knex = require("../src/db/knexConnection");

describe("routes : /coffees", () => {
  beforeEach(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    return knex.seed.run();
  });

  afterEach(async () => {
    return knex.migrate.rollback();
  });

  describe("GET /", () => {
    it("should return json", done => {
      chai
        .request(server)
        .get("/coffees")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal("application/json");
          res.body.coffees[0].should.equal("Hello world");
          // test structure of request
          // res.body.msg.should.equal("");
          // res.body.code.should.equal("Success")
          // res.body.params.should.equal("Hello world");
          done();
        });
    });
  });
});
