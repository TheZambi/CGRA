attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform float phase;

void main() {

	vTextureCoord = aTextureCoord;

	vec3 offSet = vec3(0,0, 0.1 * sin(aVertexPosition.x * 30.0 + phase));

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offSet, 1.0);

}

