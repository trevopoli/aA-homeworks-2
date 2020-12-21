class NotesController < ApplicationController

    def create
        note = Note.new(note_params)
        note.user_id = current_user.id

        if note.save
            redirect_to track_url(note.track_id)
        else
            flash.now[:errors] = note.errors.full_messages
            redirect_to track_url(note.track_id) #only validate content not blank
        end
    end

    private
    def note_params
        params.require(:note).permit(:track_id, :text)
    end
end