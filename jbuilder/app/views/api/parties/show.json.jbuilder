json.extract! @party, :name, :location
json.guests do
    json.array! @party.guests do |guest|
        json.partial! 'api/guests/guest', guest: guest
        json.gifts do
            json.array! guest.gifts, :title, :description
        end
    end
end