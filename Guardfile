# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  watch(%r{public/.+\.(css|js|html)})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)/assets/\w+/(.+\.(css|js|html)).*})  { |m| "/assets/#{m[2]}" }
  watch(%r{client/sites/\w+.\w+/(css|js|templates)/(.+\.(css|js|html))})
  watch(%r{client/common/js/nooline.cat.js})
end
