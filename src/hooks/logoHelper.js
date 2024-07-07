const logosMap = {
  react: reactLogo,
  styledComponents: styledComponentsLogo,
  material: materialLogo,
  threeFiber: threeFiberLogo,
  mongo: mongoLogo,
  express: expressLogo,
  typescript: typescriptLogo,
  vite: viteLogo,
  redux: reduxLogo,
  js: jsLogo,
  node: nodeLogo,
};

export function getLogosForProject(project) {
  const { tools } = project;
  const projectLogos = tools.map((tool) => logosMap[tool]);
  return projectLogos;
}
