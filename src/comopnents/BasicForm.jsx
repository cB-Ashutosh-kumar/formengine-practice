
import { viewWithCss } from '@react-form-builder/components-rsuite'
import { buildForm, FormViewer } from '@react-form-builder/core'
import { useCallback, useMemo } from 'react'
import './style.module.scss'
const BasicForm = () => {
  const simpleForm = useMemo(() => {
    return buildForm({ errorType: 'RsErrorMessage' })
      .component('container', 'RsContainer')
      .style({ flexDirection: 'row' })
      .children((builder) =>
        builder
          .component('firstName', 'RsInput')
          .prop('placeholder', 'Enter your first name')
          .prop('label', 'First Name')
          .validation('required')
          .component('lastName', 'RsInput')
          .prop('placeholder', 'Enter your last name')
          .prop('label', 'Last Name')
          .validation('required')
      )

      .component('birthDate', 'RsDatePicker')
      .prop('label', 'Birth Date')
      .prop('oneTap', true)
      .validation('min').args({ value: '1900-01-07T12:25:37.000Z' })
      .component('submit', 'RsButton')
      .prop('children', 'Submit')
      .prop({"backgroundColor": "#000"})
      .prop('className','submit-btn')
      .prop('color', 'blue')
      // .prop('appearance', 'primary')
      .event('onClick')
      .commonAction('validate').args({ failOnError: true })
      .customAction('onSubmit')
      .json()
  }, [])

  const getForm = useCallback(() => simpleForm, [simpleForm])

  const actions = useMemo(() => {
    return {
      onSubmit: (e) => {

        alert('Form data: ' + JSON.stringify(e.data))
      },
    }
  }, [])


  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>formEngine</h1>
      <FormViewer
        view={viewWithCss}
        getForm={getForm}
        actions={actions}
      />
    </div>
  )
}

export default BasicForm
