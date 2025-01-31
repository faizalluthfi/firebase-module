<% const { serviceMapping, serviceOptions, writeImportStatement, writeInjections } = options %>

export default async function (session) {
  <% if (!serviceOptions.static) { %>    
  <%= writeImportStatement(options) %>
  <% } %>

  <% if (serviceOptions.location) { %>
  const functionsService = session.<%= serviceMapping.id %>('<%= serviceOptions.location %>')
  <% } else { %>
  <% /* If .location is undefined, default will be "us-central1" */ %>
  const functionsService = session.<%= serviceMapping.id %>()
  <% } %>

  <% /* Uses emulator, if emulatorPort is set. */ %>
  <% if (['string', 'number'].includes(typeof serviceOptions.emulatorPort)) { %>
  functionsService.useFunctionsEmulator('http://localhost:<%= `${serviceOptions.emulatorPort}` %>')
  <% } %>

  return functionsService
}
