export default function guardrail(mathFunction) {
  const gard = [];

  try {
    gard.push(mathFunction());
  } catch (err) {
    gard.push(String(err));
  } finally {
    gard.push('Guardrail was processed');
  }

  return gard;
}
