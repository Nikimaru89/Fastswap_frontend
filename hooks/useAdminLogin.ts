import { useEffect } from "react"
import api from '../api'
import { adminAccess } from "../redux/action/faceAction"

const useAdminLogin = (account, dispatch) => {

  useEffect(() => {
    if (account) {
      api.admin.checkAdmin(account).then(res => {
        if (res.data.success) {
          dispatch(adminAccess({ value: true }))
        } else {
          dispatch(adminAccess({ value: false }))
        }
      })
    }
  }, [account, dispatch])
}

export default useAdminLogin