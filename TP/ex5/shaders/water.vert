attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {

	//vTextureCoord = aTextureCoord;

	vTextureCoord = aTextureCoord + vec2((0.0075 * timeFactor), (0.0075 * timeFactor));

	vec3 offSet = aVertexNormal * 0.08 * (texture2D(uSampler2, vTextureCoord).b - 0.5);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offSet, 1.0);
}

