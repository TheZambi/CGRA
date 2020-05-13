attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {

	vTextureCoord = aTextureCoord;

	vec3 offSet = aVertexNormal * 8.0 * (texture2D(uSampler2, vTextureCoord).rgb);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offSet, 1.0);
}

