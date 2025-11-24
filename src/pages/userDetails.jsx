
import userFormDataSchema from '../data/userData.json'
import { FormViewer } from '@react-form-builder/core'
import { viewWithCss } from '@react-form-builder/components-rsuite'



const UserDetails = () => {
  return (
    <div>
      <FormViewer
        view={viewWithCss}

        
        getForm={() => JSON.stringify(userFormDataSchema)}
      />
    </div>
  )
}

export default UserDetails
