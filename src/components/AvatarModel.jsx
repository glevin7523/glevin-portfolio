// src/components/AvatarModel.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function AvatarModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/Idle.glb'); // Place .glb in /public
  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    if (actions && actions['Idle']) {
      actions['Idle'].play(); // Replace 'Idle' with actual animation name if different
    }
  }, [actions]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
