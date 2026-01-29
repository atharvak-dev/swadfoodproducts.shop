// ...existing code...
router.get('/best-sellers', async (req, res) => {
    try {
        const bestSellers = await Product.find({ tags: 'best-seller' });
        res.json(bestSellers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// ...existing code...
