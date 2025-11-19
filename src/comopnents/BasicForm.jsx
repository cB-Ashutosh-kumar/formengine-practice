import {viewWithCss} from '@react-form-builder/components-rsuite'
import {FormViewer} from '@react-form-builder/core'
import basicFormJson from './BasicForm.json'
// const simpleForm = {
//   version: '1',
//   errorType: 'RsErrorMessage',
//   form: {
//     key: 'Screen',
//     type: 'Screen',
//     props: {},
//     children: [
//       {
//         key: 'name',
//         type: 'RsInput',
//         props: {
//           label: {
//             value: 'Name'
//           }
//         }
//       },
//       {
//         key: 'email',
//         type: 'RsInput',
//         props: {
//           label: {
//             value: 'Email'
//           }
//         },
//         schema: {
//           validations: [
//             {
//               key: 'email'
//             }
//           ]
//         }
//       },
//       {
//         key: 'submit',
//         type: 'RsButton',
//         props: {
//           appearance: {
//             value: 'primary'
//           },
//           children: {
//             value: 'Submit'
//           }
//         },
//         events: {
//           onClick: [
//             {
//               name: 'validate',
//               type: 'common',
//               args: {
//                 failOnError: true
//               }
//             },
//             {
//               name: 'onSubmit',
//               type: 'custom'
//             }
//           ],
//         }
//       }
//     ]
//   },
//   localization: {},
//   languages: [
//     {
//       code: 'en',
//       dialect: 'US',
//       name: 'English',
//       description: 'American English',
//       bidi: 'ltr'
//     }
//   ],
//   defaultLanguage: 'en-US'
// }

const BasicForm = () => (
  <FormViewer
    view={viewWithCss}
    getForm={() => JSON.stringify(basicFormJson)}
    actions={{
      onSubmit: (e) => {
        alert('Form data: ' + JSON.stringify(e.data))
      },
    }}
  />
)

export default BasicForm
