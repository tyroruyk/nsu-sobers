import Scene from '../components/RoverModel';

export default function Rover() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black mb-6">Explore Our Rover (3D)</h1>

        <p className="text-gray-300 mb-4">
          Use the viewer below to inspect our rover model. Drag to rotate, scroll to zoom, and use the controls.
        </p>

        <div className="bg-gradient-to-br from-red-900/20 to-black border-2 border-red-600 p-6 rounded">
          {/* The model file should be placed at public/models/rover.glb */}
          <Scene />
        </div>
      </div>
    </div>
  );
}
