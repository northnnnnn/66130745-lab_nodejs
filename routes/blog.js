const express = require("express");
const router = express.Router();
const blogs = [
  {
    id: 1,
    title: "Kafka",
    description: "5-Star Lightning Nihility",
    cover:
      "https://static.wikia.nocookie.net/honkai-star-rail/images/9/95/Character_Kafka_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20220429104923&path-prefix=th",
  },
  {
    id: 2,
    title: "Silver Wolf",
    description: "5-Star Quantum Nihility",
    cover:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Silver_Wolf_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216230911",
  },
  {
    id: 3,
    title: "Blade",
    description: "5-Star Wind Destruction",
    cover:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/16/Character_Blade_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501004859",
  },
  {
    id: 4,
    title: "Firefly",
    description: "5-Star Fire Destruction",
    cover:
      "https://assetsio.gnwcdn.com/Honkai-Star-Rail-Firefly-materials%2C-kit%2C-and-Eidolons-cover.jpg?width=690&quality=75&format=jpg&auto=webp",
  },
];

/**
 * @swagger
 * /blog:
 *   get:
 *     tags: [Blog]
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/blog", (req, res) => {
  res.json(blogs);
});

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     tags: [Blog]
 *     summary: Get a blog by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the blog to retrieve.
 *     responses:
 *       200:
 *         description: A single blog object.
 *       404:
 *         description: blog not found.
 */
router.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const result = blogs.find((rs) => rs.id === parseInt(id));
  console.log(id);
  res.json(result);
});

module.exports = router;
