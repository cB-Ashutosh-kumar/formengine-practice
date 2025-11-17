# FormEngine

**FormEngine** is a client-side library for creating forms in React, serving as an alternative to libraries like `react-hook-form`.

FormEngine is a JSON-first form builder for React that you use within your app, not just online. It replaces manual form code with a declarative, drag-and-drop or schema-based approach.

## 🧩 What Is FormEngine?

FormEngine is an open-source React form builder that lets you:
- Design forms visually (drag-and-drop UI or AI-assisted generation)
- Render forms from JSON schemas
- Skip manual field wiring, validation, and state management

You can use it in two ways:
1.  **Online Form Builder**: Use the hosted UI to design forms and export JSON.
2.  **In-App Integration**: Install the core library (`@react-form-builder/core`) and render forms directly in your React app using JSON.

## ⚙️ How It Differs from React Hook Form

*This section is pending a detailed comparison. Consider adding a table that highlights the key differences between FormEngine and React Hook Form.*

FormEngine is ideal for HRMS, finance portals, or admin dashboards where forms are complex and frequently updated.

## 🚀 How You Can Use It at CodeBuckt

As a solo frontend dev architecting HRMS modules, FormEngine can help you:
- Rapidly prototype employee info forms without writing boilerplate.
- Standardize form structure across modules using JSON schemas.
- Collaborate with backend/UI/UX by sharing form definitions.
- Improve onboarding by reducing form complexity for new devs.

## 🛠️ Getting Started

1.  **Install the core library:**

    ```bash
    npm i @react-form-builder/core
    ```

2.  **Render a form:**

    ```jsx
    import { FormEngine } from '@react-form-builder/core';

    const formSchema = {
      fields: [
        { type: 'text', label: 'Name', name: 'name', required: true },
        { type: 'email', label: 'Email', name: 'email' },
      ]
    };

    function MyForm() {
      return <FormEngine schema={formSchema} />;
    }
    ```

3.  Use their online builder to design forms and export the JSON schema.

## NPM Packages

Form Builder consists of the following NPM packages:

- `@react-form-builder/core`
- `@react-form-builder/designer`
- `@react-form-builder/components-rsuite`
- `@react-form-builder/components-fast-qr`
- `@react-form-builder/components-rich-text`

### @react-form-builder/core package

This is the main Form Builder package that contains the React methods and components for displaying the form. This package must be used at runtime. It includes:

- API for component metadata
- Validation
- Localization
- Form renderer (`FormViewer`)

## ✅ Key Features

- Design forms visually on the FormEngine platform (drag-and-drop or AI-assisted).
- Export the form as a JSON schema.
- Use that JSON inside your React app by installing FormEngine packages.
- Render the form dynamically using `<FormEngine schema={...} />`.
