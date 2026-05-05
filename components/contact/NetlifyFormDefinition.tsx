/**
 * Hidden static form definition rendered server-side.
 *
 * This is the canonical form definition that Netlify's build-time HTML parser
 * scans to register the "contact" form. Without this in the page's
 * server-rendered output, JS-driven form submissions get dropped because
 * Netlify never registered the form name.
 *
 * The visible form is rendered by ContactForm.tsx (client component, multi-step).
 * Both must declare the same form name + same field names.
 */
export default function NetlifyFormDefinition() {
  return (
    <form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
      aria-hidden="true"
    >
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="company" />
      <textarea name="building" />
      <select name="help_type">
        <option value="Fractional CMO for contractors" />
        <option value="Fractional CTO – technology leadership" />
        <option value="AI automation systems" />
        <option value="Software or SaaS platform build" />
        <option value="CRM – marketing infrastructure" />
        <option value="Strategic partnership" />
        <option value="Other serious inquiry" />
      </select>
      <select name="company_stage">
        <option value="Startup / pre-revenue" />
        <option value="Under $1M/year" />
        <option value="$1M–$5M/year" />
        <option value="$5M–$10M/year" />
        <option value="$10M+/year" />
        <option value="Internal platform or venture-backed project" />
      </select>
      <textarea name="problem" />
      <input name="bot-field" />
    </form>
  );
}
