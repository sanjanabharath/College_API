const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
const { expect } = chai;

describe("Authentication Tests", () => {
  it("should register a user", (done) => {
    chai
      .request(app)
      .post("/api/auth/register")
      .send({
        name: "John",
        email: "john@example.com",
        password: "123456",
        role: "Student",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
