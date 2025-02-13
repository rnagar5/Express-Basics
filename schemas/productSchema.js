module.exports = {
  type: "object",
  properties: {
    name: { type: "string" },
    price: { type: "number", minimum: 0 },
    category: { type: "string" },
    description: { type: "string" }
  },
  required: ["name", "price", "category", "description"],
  additionalProperties: false
};

  