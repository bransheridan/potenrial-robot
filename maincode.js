check {
	dependsOn checkstyleNohttp
}
//insert here
allprojects {
	group "org.springframework.boot"

	repositories {
		mavenCentral()
		if (version.contains('-')) {
			maven { url "https://repo.spring.io/milestone" }
		}
		if (version.endsWith('-SNAPSHOT')) {
			maven { url "https://repo.spring.io/snapshot" }
		}
	}

	configurations.all {
		resolutionStrategy.cacheChangingModulesFor 0, "minutes"
	}
}

//apples and bees



pluginManagement {
	repositories {
		mavenCentral()
		gradlePluginPortal()
		if (version.endsWith('-SNAPSHOT')) {
			maven { url "https://repo.spring.io/snapshot" }
		}
	}
	resolutionStrategy {
		eachPlugin {
			if (requested.id.id == "org.jetbrains.kotlin.jvm") {
				useVersion "${kotlinVersion}"
			}
			if (requested.id.id == "org.jetbrains.kotlin.plugin.spring") {
				useVersion "${kotlinVersion}"
			}
		}
	}
}


}
root=true


