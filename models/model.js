const mongoose = require("mongoose");
var moment = require("moment");

const ornamentalPlantSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productImg: [
    {
      imgUrl: {
        type: String,
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  intro: [
    {
      introText: {
        type: String,
      },
    },
  ],
  characteristics: [
    {
      characteristicsText: {
        type: String,
      },
    },
  ],
  meaning: [
    {
      meaningText: {
        type: String,
      },
    },
  ],
  uses: [
    {
      usesText: {
        type: String,
      },
    },
  ],
  productCare: [
    {
      productCareText: {
        type: String,
      },
    },
  ],
  purchases: {
    type: Number,
    default: 0,
  },
  trendingProduct: {
    type: Boolean,
    default: false,
  },
  dateAdded: {
    type: Date,
    default: moment()
  }
});

// hóa đơn thanh toán
const billSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  totalQuantity: {
    type: Number,
    required: true,
  },
  billProduct: [
    {
      id: {
        type: String,
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      imgUrl: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ]
});

let ornamentalPlant = mongoose.model("ornamental plant", ornamentalPlantSchema);
let bill = mongoose.model("bill", billSchema);

module.exports = { ornamentalPlant, bill };
