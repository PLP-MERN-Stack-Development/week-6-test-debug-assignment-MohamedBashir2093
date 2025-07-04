const express = require('express');
const {
  getTransactions,
  getTransaction,
  requestBook,
  updateTransactionStatus,
  returnBook,
  completeReturn
} = require('../controllers/transactionController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(protect, admin, getTransactions);

router.post('/request', protect, requestBook);
router.post('/return', protect, returnBook);

router.route('/:id')
  .get(protect, getTransaction);

router.put('/:id/status', protect, admin, updateTransactionStatus);
router.put('/:id/complete', protect, admin, completeReturn);

module.exports = router; 