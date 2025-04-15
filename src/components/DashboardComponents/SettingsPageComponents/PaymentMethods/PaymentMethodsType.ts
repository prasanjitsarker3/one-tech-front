export interface PaymentMethodsType {
    paymentMethods: {
        id: number,
        type: string,
        info: string,
        default: boolean
    }[]
}