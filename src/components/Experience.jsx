import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from 'three';

extend({ BoxBufferGeometry, MeshBasicMaterial, Mesh });

const Experience = () => {
    return (
        <mesh>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshNormalMaterial color="red" />
        </mesh>
    );
};

export default Experience;