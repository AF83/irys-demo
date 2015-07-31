# More info at https://github.com/guard/guard#readme

ignore %r{^dist/}

coffeescript_options = {
  input: "app/scripts",
  output: "app/scripts",
  patterns: [%r{app/scripts/(.+\.(?:coffee|coffee\.md|litcoffee))$}]
}

guard 'coffeescript', coffeescript_options do
  coffeescript_options[:patterns].each { |pattern| watch(pattern) }
end

guard :jasmine do
  watch(%r{jasmine/spec\.(js\.coffee|js|coffee)$}) { 'jasmine' }
  watch(%r{app/scripts/(.+?)\.(js\.coffee|js|coffee)(?:\.\w+)*$}) { |m| "jasmine/#{ m[1] }_spec.#{ m[2] }" }
end

guard 'sass', :input => 'sass', :output => 'css'
