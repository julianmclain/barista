exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("coffees")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coffees").insert([
        { type: "homebrew" },
        { type: "homebrew" },
        { type: "purchased", brand: "Blue Bottle" },
        { type: "purchased", brand: "Sightglass" },
        { type: "homebrew" },
        { type: "homebrew" },
        { type: "purchased", brand: "Philz" }
      ]);
    });
};
