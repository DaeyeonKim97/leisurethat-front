import { loadTossPayments } from '@tosspayments/payment-sdk'
export async function TossAPI(projectId, rewardId) {
  const clientKey = 'test_ck_7DLJOpm5Qrl2BpO2oKe3PNdxbWnY'
  const test = await loadTossPayments(clientKey).then((tossPayments) => {
    tossPayments.requestBillingAuth('카드', {
      // 빌링키 발급 요청을 위한 파라미터
      customerKey: 'test_ck_7DLJOpm5Qrl2BpO2oKe3PNdxbWnY',
      successUrl: 'http://localhost:3000/payment/complete?rewardId=' + rewardId,
      failUrl: 'http://localhost:8001/fail',
    })
  })
}
