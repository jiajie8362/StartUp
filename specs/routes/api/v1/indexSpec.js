describe('Routes, api, v1, index', () => {
  const server = Starters.api;
  const agent = supertest(server);

  it('should pass', done => {
    agent.get('/')
    .expect(200)
    .end(done);
  });

});
