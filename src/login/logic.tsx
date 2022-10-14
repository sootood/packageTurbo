export function validPhoneNumber(phoneNumber: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    if (phoneNumber.length === 11 && phoneNumber.startsWith('09'))
      resolve(true)
    else
      reject(false)
  })
}
