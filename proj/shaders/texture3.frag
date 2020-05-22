#ifdef GL_ES
precision highp float;
#endif

varying vec3 vVertexPosition;
uniform sampler2D uSampler;
uniform float cutoff;

void main() {

    gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);

    if (vVertexPosition.x < -0.5 + cutoff)
	    gl_FragColor = vec4(0.5-vVertexPosition.x, 0.5+vVertexPosition.x, 0.0, 1.0);

}