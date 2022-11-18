function websiteInpuValidator(text: string) {
  return (
    (text.indexOf('.') !== -1 || text.indexOf('/') !== -1) &&
    "You should put only the name of an App or a Website. Don't put .com or https://"
  );
}

export default websiteInpuValidator;
