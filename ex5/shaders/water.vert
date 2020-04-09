#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {
    vec3 offset;
	vTextureCoord = aTextureCoord;

    vec2 animationCoords = mod(vec2(0.0,0.1) + vTextureCoord + timeFactor*0.01, 1.0);

    offset[2] = texture2D(uSampler2, animationCoords).b * 0.05;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}