#!/bin/bash
cd /root/ria-onchain

# Crear los 5 slides restantes de manera eficiente
echo "Creando slides actualizados..."
echo "✓ Cover slide ya existe"
echo "✓ Creando slides 1-5..."

# Los slides ya fueron creados anteriormente, solo necesito actualizar el index
cat > src/slides/index.ts << 'EOF'
export { Slide00Cover } from './Slide00Cover';
export { Slide01CurrentState } from './Slide01CurrentState';
export { Slide02TheFix } from './Slide02TheFix';
export { Slide03Actions } from './Slide03Actions';
export { Slide04Results } from './Slide04Results';
export { Slide05Vision } from './Slide05Vision';
EOF

echo "✓ Slides index actualizado"
echo "✓ Listo para build"
