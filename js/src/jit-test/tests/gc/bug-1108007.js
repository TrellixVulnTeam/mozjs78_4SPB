// |jit-test| --no-threads; --no-ion; --no-baseline; skip-if: !('gczeal' in this)

gczeal(2);
(function() {
    evaluate(cacheEntry((function() {
        return "(new String(\"\"))"
    })()), Object.create({ global: newGlobal({ cloneSingletons: true }) }, {
        saveBytecode: {
            value: true
        }
    }))
})();
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0]];