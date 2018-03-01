require 'liquid'
require 'uri'

# Capitalize all words of the input
module CapitalizeAll
  def capitalize_all(words)

    allwords = words.tr("0-9", "").split(' ')
    # except these words
    donttouchwords = [ 'the', 'and', 'on', 'to', 'of', 'for', 'ii', 'iii', 'iv' ]
    newwords = Array.new

    allwords.each do |word|
      if donttouchwords.include? word
        newwords.push word
      elsif word == "ocio"
        newwords.push "OCIO"
      elsif word == "bc"
        newwords.push "BC"
      elsif word == "ip"
        newwords.push "IP"
      else
        newwords.push word.capitalize
      end
    end

    str = newwords.join(' ')
    # ensure that at the very least, the first letter of the string is capitalized
    str[0] = str[0].capitalize

    return str

  end
end

Liquid::Template.register_filter(CapitalizeAll)
