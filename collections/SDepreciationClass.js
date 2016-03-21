SDepreciationClass = new SimpleSchema({
    name: {
        type: String
    },
    method: {
        type: String,
        label: "Method"
    },
    usageLimit: {
        type: Number,
        label: "Usage Limit"
    },
    rate: {
        type: Number,
        label: "Rate"
    }
});