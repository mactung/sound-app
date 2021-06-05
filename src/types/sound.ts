export interface SoundType {
    _id: number;
    name: string;
    type: string;
    file_name: string;
    image_path: string;
    is_download: boolean;
    is_new: boolean;
    is_show: boolean;
    created_at: Date;
    updated_at: Date;
    is_selected?: boolean;
    sound?: any;
}
