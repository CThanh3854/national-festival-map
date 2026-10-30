// Sound utility - muted and disabled per user request
class SoundService {
  public toggleMute(): boolean {
    return true;
  }

  public getMuted(): boolean {
    return true;
  }

  public playChime(_freq?: number) {
    // Disabled
  }

  public playTap() {
    // Disabled
  }
}

export const sound = new SoundService();
